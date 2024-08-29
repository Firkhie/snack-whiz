import SnackView from "@/components/snack-view";
import getRecipesMetadata from "@/lib/recipe-lib/get-recipes-metadata";

export default function Home() {
  const metadata = getRecipesMetadata();
  return (
    <main>
      <SnackView metadatas={metadata} />
    </main>
  );
}
