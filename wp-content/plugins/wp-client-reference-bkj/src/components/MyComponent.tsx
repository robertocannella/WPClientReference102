import stylingObject from "./MyComponentStyles";
import QueryObject from '../types/QueryObject'

const MyComponent = ({ queryResults }) => {
    console.log(queryResults)
    return (
        <div className="container mx-auto">
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                <tr className="bg-gray-200 border border-gray-400 !important">
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Content</th>
                </tr>
                </thead>
                <tbody>
                {queryResults.map((result:QueryObject) => (
                    <tr key={result.ID} className="border border-gray-400">
                        <td className="px-4 py-2">{result.post_title}</td>
                        <td className="px-4 py-2" dangerouslySetInnerHTML={{ __html: result.post_date }}></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyComponent;