interface RecipeCardProps {
  title: string;
  description: string;
  cook_time: number;
  difficulty: string;
}

export default function RecipeCard({
  title,
  description,
  cook_time,
  difficulty,
}: RecipeCardProps) {
  return (
    <div className="flex h-52 w-full cursor-pointer flex-col justify-between gap-y-4 rounded-lg border border-neutral-200 p-6 shadow-md hover:shadow-lg">
      <h3 className="line-clamp-1 text-2xl font-bold">{title}</h3>
      <p className="line-clamp-2 text-neutral-600">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-semibold">Prep Time</span>
          <p>{cook_time} minutes</p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Difficulty</span>
          <p>{difficulty}</p>
        </div>
      </div>
    </div>
  );
}
