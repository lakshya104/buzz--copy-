const DashboardItemContainer = ({title, content}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h2 className="lg:text-2xl text-xl font-semibold text-indigo-800 mb-4">
          {title}
        </h2>
        <p className="text-slate-600 text-lg font-semibold">{content}</p>
      </div>
  )
}

export default DashboardItemContainer