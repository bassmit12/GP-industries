<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Project;

class ProjectStatusChanged extends Mailable
{
    use Queueable, SerializesModels;

    public $project;
    public $status;

    /**
     * Create a new message instance.
     */
    public function __construct(Project $project, string $status)
    {
        $this->project = $project;
        $this->status = $status;
    }

    public function build()
    {
        return $this->subject('Project Status Changed')
            ->view('emails.project-status-changed')
            ->with([
                'projectName' => $this->project->name,
                'status' => $this->status,
                'ownerName' => $this->project->user->name,
            ]);
    }
}
