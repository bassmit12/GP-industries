import React from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth, project }) {
    const {
        auth: { user },
    } = usePage().props;

    const handleStatusChange = (e) => {
        const status = e.target.value;
        router.patch(route("projects.updateStatus", project.id), {
            status,
            onSuccess: () => {
                router.visit(route("projects.show", project.id));
            },
        });
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this project?")) {
            router.delete(route("projects.destroy", project.id), {
                onSuccess: () => {
                    router.visit(route("projects.index"));
                },
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Project Details
                    </h2>
                    {user.role === "admin" && (
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-red-600"
                        >
                            Delete Project
                        </button>
                    )}
                </div>
            }
        >
            <Head title="Project Details" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">
                                {project.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                {project.description}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Due Date: {project.due_date}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Status: {project.status}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Created By: {project.user.name}
                            </p>
                            {user.role === "admin" && (
                                <div className="mt-8">
                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Update Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        defaultValue={project.status}
                                        onChange={handleStatusChange}
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    >
                                        <option value="Accepted">
                                            Accepted
                                        </option>
                                        <option value="Started">Started</option>
                                        <option value="Finished">
                                            Finished
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
