export const UsedSpaceWidget = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-100 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          User Space
        </span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div
        className="h-2 bg-violet-200 rounded-full"
        role="progressbar"
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="bg-violet-600 h-2 w-4/5 rounded-full"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  );
};

export default UsedSpaceWidget;
