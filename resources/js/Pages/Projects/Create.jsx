import React, { useState } from "react";
import { useForm, Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        due_date: "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("projects.store"));
    };

    const handleFileChange = (e) => {
        setData("image", e.target.files[0]);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Project
                </h2>
            }
        >
            <Head title="Create Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.name && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.description && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        value={data.due_date}
                                        onChange={(e) =>
                                            setData("due_date", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.due_date && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.due_date}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.image && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.image}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                                    >
                                        Create
                                    </button>
                                    <Link
                                        href={route("projects.index")}
                                        className="ml-4 bg-gray-500 text-white py-2 px-4 rounded shadow hover:bg-gray-600"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
