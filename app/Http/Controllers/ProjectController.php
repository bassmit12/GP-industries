<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;
use App\Mail\ProjectStatusChanged; // Import your Mailable class
use Illuminate\Support\Facades\Mail; // Import the Mail facade

class ProjectController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        if ($user->role === 'admin') {
            $projects = Project::with('user')->get();
        } else {
            $projects = Project::with('user')->where('user_id', $user->id)->get();
        }

        return Inertia::render('Projects/Index', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'due_date' => $request->due_date,
            'image' => $imagePath,
            'user_id' => auth()->id(),
            'status' => 'Accepted', // Default status
        ]);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    public function show($id)
    {
        $project = Project::with('user')->findOrFail($id);
        return Inertia::render('Projects/Show', ['project' => $project]);
    }

    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $project = Project::findOrFail($id);

        if ($request->hasFile('image')) {
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            $project->image = $request->file('image')->store('images', 'public');
        }

        $project->name = $request->name;
        $project->description = $request->description;
        $project->due_date = $request->due_date;
        $project->save();

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string|in:Accepted,Started,Finished',
        ]);

        $project = Project::findOrFail($id);
        $oldStatus = $project->status;  // Store the old status to compare
        $project->status = $request->status;
        $project->save();

        // Check if the status has actually changed
        if ($oldStatus !== $project->status) {
            // Send email to the owner
            Mail::to($project->user->email)->send(new ProjectStatusChanged($project, $project->status));
        }

        return redirect()->route('projects.index')->with('success', 'Project status updated successfully.');
    }
}

