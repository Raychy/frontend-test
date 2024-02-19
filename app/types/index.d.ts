type Order = {
    id: Key,
    shipid: String,
    date: String,
    status: String,
    customer: String,
    email: String,
    country: String,
    shipping: String,
    source: String,
    orderType: String,
}
type GlobalProps = {
    orders: Order[];
};