import { Link } from '@nextui-org/react';

export default function Footer() {
    return (
        <footer className="mt-auto py-8 text-center print:hidden">
            <div className="mb-1">
                Created by{' '}
                <Link isExternal href="https://github.com/cosmicproc">
                    cosmicproc
                </Link>
            </div>
            <span className="border-r-2 border-gray-500 pr-2">
                Source on{' '}
                <Link
                    isExternal
                    href="https://github.com/cosmicproc/testgen/"
                >
                    GitHub
                </Link>
            </span>
            <span className="pl-2">
                See the{' '}
                <Link
                    isExternal
                    href="https://github.com/cosmicproc/testgen/tree/main/examples"
                >
                    examples
                </Link>
            </span>
        </footer>
    );
}
