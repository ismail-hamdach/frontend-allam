const StatusBadge = () => {
    return (
      <div className="flex items-center justify-between p-4 bg-transparent ">
        <span data-testid="flag" className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800" // Adjust size and color as needed
          >
            <path
              d="M4.516 21a.583.583 0 0 0 .44-.186.583.583 0 0 0 .187-.442v-5.258c.138-.045.419-.127.844-.245.425-.124.984-.186 1.677-.186.857 0 1.645.085 2.364.255.72.163 1.416.356 2.09.579.673.215 1.36.408 2.06.578.7.17 1.455.255 2.266.255.712 0 1.249-.039 1.608-.117.367-.079.72-.193 1.06-.344.307-.143.552-.336.735-.578.19-.242.285-.56.285-.952V5.021a.644.644 0 0 0-.265-.55.999.999 0 0 0-.628-.196c-.229 0-.572.066-1.03.196-.451.131-1.075.197-1.873.197-.811 0-1.57-.082-2.276-.246-.7-.17-1.386-.363-2.06-.578a25.03 25.03 0 0 0-2.09-.589C9.192 3.085 8.404 3 7.548 3c-.707 0-1.24.04-1.6.118-.359.078-.712.193-1.059.343a2.01 2.01 0 0 0-.745.579c-.183.235-.275.55-.275.941v15.391c0 .17.062.317.186.442.131.124.285.186.462.186Z"
              fill="currentColor"
            />
          </svg>
          <span className="ml-2 text-lg font-medium text-gray-800">Absolute Beginner</span>
        </span>
        <span
          data-testid="forward"
          className="flex items-center cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800" // Adjust size and color as needed
          >
            <path
              d="m19.769 12.028-4.923-5.142c-.317-.35-.944-.382-1.311-.077-.368.305-.405.888-.064 1.22l3.557 3.713H4.923c-.51 0-.923.384-.923.858 0 .473.413.857.923.857h12.105l-3.557 3.714c-.34.331-.294.913.073 1.219.368.305.986.275 1.302-.076l4.923-5.143c.32-.416.295-.789 0-1.143Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    );
  };

export default StatusBadge