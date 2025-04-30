'use client'

import { useState, useEffect } from "react";

export default function Home() {
    let name: string = 'TypeScript';
    let version: number = 5.8;
    let isAwesome: boolean = true;

    let features: string[] = ['Static typing', 'Interfaces', 'Generics'];
    let versionHistory: [number, string, Date] = [4.9, 'stable', new Date(2022, 10, 15)];

    interface User {
        id: number;
        name: string;
        role: 'admin' | 'user' | 'guest';
        metadata?: { joinDate: Date };
    }

    const currentUser: User = {
        id: 1,
        name: 'Developer',
        role: 'admin',
        metadata: { joinDate: new Date() }
    };

    function getFirstItem<T>(items: T[]): T | undefined {
        return items.length > 0 ? items[0] : undefined;
    }

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">{name} v{version}</h1>
            <p className="mt-2 text-gray-600">Is it awesome? {isAwesome ? 'Yes!' : 'No'}</p>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Features:</h2>
                <ul className="list-disc pl-5 mt-2">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Current User:</h2>
                <p>ID: {currentUser.id}</p>
                <p>Name: {currentUser.name}</p>
                <p>Role: {currentUser.role}</p>
                <p>Joined: {currentUser.metadata?.joinDate.toLocaleDateString()}</p>
            </div>

            <div className="mt-4 p-3 bg-gray-100 rounded">
                <p>First feature: {getFirstItem(features) || 'None'}</p>
                <p>Timer count: {count}</p>
            </div>
        </div>
    );
}
