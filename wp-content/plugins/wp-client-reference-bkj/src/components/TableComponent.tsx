import QueryObject from "../types/QueryObject"; // assuming the QueryObject interface is exported from a separate file
import { useState, useEffect } from '@wordpress/element';
type Props = {
    queryResult: QueryObject[];
};

const TableComponent: React.FC<Props> = ({ queryResult }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Perform async task here
        setIsLoading(false); // Set loading state to false when task is done
    }, []);

    return (
        <>

            <div className="mt-4 -mb-3">
                <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                    <div style={{backgroundPosition: "10px 10px"}}
                         className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                    <div className="relative rounded-xl overflow-auto">
                        <div className="shadow-sm overflow-hidden my-8">
                            <table className="border-collapse table-auto w-full text-sm">
                                <thead>
                                <tr>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">ID</th>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Title</th>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Content</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-slate-800">
                                {queryResult.map((queryObj, index) => (
                                    <tr key={queryObj.ID} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-700">{queryObj.ID}</td>
                                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-700">
                                            {/*<a href={queryObj.guid} className="underline">*/}
                                                {queryObj.post_title}
                                            {/*</a>*/}
                                        </td>
                                 
                                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-700">
                                            {queryObj.post_content
                                                .split(" ")
                                                .slice(0, 7)
                                                .join(" ")}
                                            {queryObj.post_content.split(" ").length > 7 ? "..." : ""}

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                </div>
            </div>
        </>

    );
};

export default TableComponent;