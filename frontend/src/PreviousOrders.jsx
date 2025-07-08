const PreviousOrders = ({ previousOrders }) => {
  return (
    <div>
      <h1>PREVIOUS ORDERS</h1>
      {previousOrders.length === 0 ? (
        <p>NO PREVIOUS ORDERS</p>
      ) : (
        <div>
          <h2>All Previous Orders:</h2>
          {previousOrders.map((order, index) => (
            <div key={index}>
              <h3>Order #{index + 1}</h3>
              <ul>
                {order.map((item) => (
                  <li key={item.id}>
                    <strong>{item.name}</strong> — Type: {item.type}, Price:{" "}
                    {item.price}, Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default PreviousOrders;
