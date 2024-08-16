import React from "react";
import { useForm, usePage, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ auth }) {
    const { user } = usePage().props;

    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
        role: user.role,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("users.update", user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit User
                </h2>
            }
        >
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
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.password && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.password_confirmation && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.password_confirmation}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Role
                                    </label>
                                    <select
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    {errors.role && (
                                        <div className="text-red-500 text-xs mt-1">
                                            {errors.role}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <Link
                                        href={route("users.index")}
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
