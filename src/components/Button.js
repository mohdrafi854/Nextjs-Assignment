export default function Button({title}){
    return(
    <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        {title}    
      </button>
    )
}