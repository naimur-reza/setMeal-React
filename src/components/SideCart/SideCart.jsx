
const SideCart = ({ storeArray }) => {
  return (
    <div className="bg-sky-300 rounded-lg border h-96 overflow-scroll p-5 text space-y-2 w-56">
      <div className="sticky top-0 z-30 bg-sky-300">
        <h1 className="font-semibold text-center">Order Summery</h1>
        <h1>Quantity : </h1>
        <h1>Added Item: </h1>
      </div>
      <h1 className="text-lg font-semibold">Items : </h1>
      <ol className="list-decimal p-3">
      </ol>
    </div>
  );
};

export default SideCart;
