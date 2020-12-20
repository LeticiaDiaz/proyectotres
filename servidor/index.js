const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
/* const passport = require("passport") */

const app = express();

let db;

app.use(cors());
app.use(express.urlencoded({extended:false}))

MongoClient.connect("mongodb+srv://leti:678074@cluster0.mbokh.mongodb.net/contactos?retryWrites=true&w=majority", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("contactos");
  }
});

app.get("/usuarios", function (req, res) {
  db.collection("contactos")
    .find()
    .toArray(function (err, datos) {
      if (err != null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.post("/nuevousuario", function (req, res) {
  let usuario = {
    nombre: req.body.nombre,
    sexo: req.body.sexo,
    edad: parseInt(req.body.edad),
    ciudad: req.body.ciudad,
    buscando: req.body.buscando,
    aficiones: req.body.aficiones,
    foto: req.body.foto,
    email: req.body.email,
  };

  db.collection("contactos").insertOne(usuario, function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send({datos:datos, mensaje:"Te has registrado correctamente"})
  }
})
  
});



app.put("/modificarusuario", function (req, res) {
  const nombre = req.body.nombre;
  let sexo = req.body.sexo;
  let edad = parseInt(req.body.edad);
  let ciudad = req.body.ciudad;
  let buscando = req.body.buscando;
  let aficiones = req.body.aficiones;
  let foto = req.body.foto;
  let email = req.body.email;

  db.collection("contactos").updateOne(
    { nombre: nombre },
    {
      $set: {
        sexo: sexo,
        edad: edad,
        ciudad: ciudad,
        buscando: buscando,
        aficiones: aficiones,
        foto: foto,
        email: email,
      },
    },

    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
});

app.put("/buscar/usuarios", function (req, res) {
  console.log(req.body);
  db.collection("contactos")
    .find({
      $and: [
        {
          $and: [
            { edad: { $lte: req.body.edadTop } },
            { edad: { $gte: req.body.edadDown } },
          ],
        },
        {
          ciudad: req.body.ciudad,
        },
        {
          aficiones: req.body.aficiones,
        },
        {
          sexo: req.body.sexo,
        },
      ],
    })
    .toArray(function (err, datos) {
      if (err != null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.get("/contactar/:nombre", function (req, res) {
  let nombre = req.params.nombre;
  db.collection("contactos")
    .find({ nombre: nombre })
    .toArray(function (err, datos) {
      if (err != null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});



app.delete("/eliminarusuario", function (req, res) {
 const nombre = req.body.nombre
 console.log(req.body)

  db.collection("contactos").deleteOne({ nombre: nombre }, function (
    err,
    datos
  ) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send({datos:datos, mensaje:"Usuario eliminado"});
    }
  });
});

/* app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

​
const LocalStrategy = require("passport-local").Strategy;
​
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.collection("contactos")
        .find({ email: email })
        .toArray(function (err, users) {
          if (users.length === 0) {
            done(null, false);
          }
          const user = users[0];
          if (password === user.password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
    }
  )
);
​
passport.serializeUser(function (user, done) {
  done(null, user.email);
});
​
passport.deserializeUser(function (id, done) {
  db.collection("contactos")
    .find({ email: id })
    .toArray(function (err, users) {
      if (users.length === 0) {
        done(null, null);
      }
      done(null, users[0]);
    });
});
​
app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);
​
app.get("/api/fail", function (req, res) {
  res.status(401).send({ mensaje: "denegado" });
});
​
app.get("/api", function (req, res) {
  if (req.isAuthenticated() === false) {
    return res.status(401).send({ mensaje: "necesitas loguearte" });
  }
  res.send({ mensaje: "logueado correctamente" });
});
​
app.post("/api/register", function (req, res) {
  db.collection("contactos").insertOne(
    {
      name: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send({ mensaje: "Registrado" });
      }
    }
  );
});
​
app.get("/api/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ nombre: req.user.name });
  }
  res.send({ nombre: "No logueado" });
});
 */

app.listen(3001);
