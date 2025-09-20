const Timeline = ({ items = [] }) => {
  return (
    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
      {items.map((item, index) => (
        <li key={index} className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-200">
              {item.date}
            </time>

            <h3 className="text-lg font-bold text-white">{item.title}</h3>

            <p className="mt-0.5 text-sm text-gray-200">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
