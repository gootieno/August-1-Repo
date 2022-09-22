const http = require("http");

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2,
  },
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      // Your code here

      // set res body to all dogs
      // handle status code and content type
      // send data

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(dogs));
      return res.end();
    }

    // GET /dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/"); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        // Your code here
        const dogId = Number(urlParts[2]);

        let found;

        //                              2     =>  2
        // dog = dog.find(dog => dog.dogId === dogId)

        for (let i = 0; i < dogs.length; i++) {
          let dog = dogs[i];

          if (dog["dogId"] === dogId) {
            found = dog;
            break;
          }
        }

        if (found) {
          const dogString = JSON.stringify(found);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          return res.end(dogString);
        } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          return res.end("Requested Item Not Found!");
        }
        // get the dog with correct id
        // set res body to that dog
        // handle status code and content type
        // send data
      }
    }

    // POST /dogs
    if (req.method === "POST" && req.url === "/dogs") {
      const { name, age } = req.body;
      // Your code here
      // create a dog with name, age and id
      // add that dog to the "database" (dogs array)
      // set res body to created dog
      // set the status code and content type
      // send the data

      const dogId = getNewDogId();

      const newDog = { dogId, name, age };

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      dogs.push(newDog);

      return res.end(JSON.stringify(newDog));
    }

    // PUT or PATCH /dogs/:dogId
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/dogs/")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        // Your code here

        // Get the data from the req.body
        // find the dog that matches the dog id to change the data
        // set status code  and content type
        // send the data

        const dogId = urlParts[2];
        const { name, age } = req.body;

        let dog = dogs.find((dogObject) => dogObject.dogId === Number(dogId));

        //{ dogId: 1, name: 'Hachi Roku', age: 86 }
        dog = req.body;

        console.log("dog ", dog);

        if (name) {
          dog.name = name;
          // dogs[dogs.indexOf(dog)].name = name;
        }

        if (age) {
          // dog.age = age
          dogs[dogs.indexOf(dog)].age = age;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(dog));
      }
    }

    // DELETE /dogs/:dogId
    if (req.method === "DELETE" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here

        // find the dog index based on the dogId
        //                                  dog.dogId ===  Number(dogId)                   
        const dogIndex = dogs.findIndex((dog) => dog.dogId === +dogId);
        // remove the dog from the "database" (dogs array)
        dogs.splice(dogIndex, 1);
        // set the status code and content type
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify("Successfully deleted"));
        // send the data
      }
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end("Endpoint not found");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
