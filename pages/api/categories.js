export default function Categories(req, res) {
    if(req.method === 'GET'){
    res.status(200).json([
            {
                id: 1,
                name: "Accessories",
              },
              {
                id: 2,
                name: "Decoration",
              },
              {
                id: 3,
                name: "Fancies",
              },
              {
                id: 4,
                name: "Home Decor",
              },
              {
                id: 5,
                name: "Vases",
              },
              {
                id: 6,
                name: "Furniture",
              },
              {
                id: 7,
                name: "Luminous",
              },
              {
                id: 8,
                name: "Hardwoods",
              },
             
              
              
    ])
    }else{
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  