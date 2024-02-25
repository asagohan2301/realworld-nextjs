import ArticleForm from "@/components/articleForm";

export default function New() {
  return (
    <ArticleForm
      originalTitle=""
      originalDescription=""
      originalBody=""
      originalTagList={[]}
      endpoint={`${process.env.NEXT_PUBLIC_API_URL}/articles`}
      method="POST"
    />
  );
}