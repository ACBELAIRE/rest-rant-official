# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| Method | Path                      | Purpose                                          |
| ------ | --------------------------| ------------------------------------------------ |
| GET    | /                         | Home Page                                        |
| GET    | /places                   | Places index page                                |
| POST   | /places                   | Create new place                                 |
| GET    | /places/new               | Form page for creating a new place               |
| GET    | /places/:id               | Details about a place                            |
| PUT    | /places/:id               | Update a particular place                        |
| GET    | /places/:id/edit          | From a page for editing an existing place        |
| DELETE | /places/:id               | Delete a particular place                        |
| POST   | /places/:id/rant          | Create a rant about a  place                     |
| DELETE | /places/:id/rant/:rantId  | Delete a rant about a  place                     |
| GET    | *                         | 404 page (matches any non defined route)         |



|Name|City|State|Cuisine|Picture|
|----|----|-----|-------|-------|
|`Mega Bytes`|`Las Vegas`|`NV`|`Desserts`|![This is an image](https://www.mommytravels.net/wp-content/uploads/2018/11/Cafe-Hollywood.png)|
|`Back-End Devities`|`Philadelphia`|`PA`|`Italian`|![This is an image](https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg)|
|`Coding's Crossaints`| `New York`|`NY`|`French`|![This is an image](https://breadsandsweets.com/wp-content/uploads/2021/08/croissant-pic-4.jpg)|
|`Boolean's Beans` |`Seattle`|`WA`|`Coffee`|![This is an image](https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital.jpg.webp)|
|`Hamburger Hackers`|`Silicon Valley`|`CA`|`American`|![This is an image](https://assets.biggreenegg.eu/app/uploads/2017/12/05133526/topimage-mango-filled-hamburgers-800x500.jpg)|