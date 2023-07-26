import React from "react";
import Link from "next/link";
import Form, { FormState } from "../components/Form";
import schema from "../schema/page";
import { fetchRedisFormState } from "../lib/db";
import { useLocalFormState } from "../hooks/useLocalFormState";

const App: React.FC<{ data: FormState | null }> = ({ data }) => {
  const { localFormState } = useLocalFormState(data);
  const formData = data ?? localFormState;
  return (
    <div className="w-full mx-auto">
      <div className="px-4 sm:px-6 py-4 sm:py-6 mb-12 bg-gray-100">
        <div className="flex flex-wrap justify-between">
          <h1 className="basis-4/6 text-2xl font-bold tracking-tight text-gray-900">
            Editor
          </h1>
          <Link
            href="/site"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            View live site
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <Form schema={schema} data={formData} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const data = await fetchRedisFormState();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default App;
