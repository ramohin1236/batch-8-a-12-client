

// eslint-disable-next-line no-unused-vars
const AdminHomeCart = ({top}) => {
    console.log(top)
    return (
        <div className="card card-compact w-full bg-gray-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{top}</h2>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    );
};

export default AdminHomeCart;