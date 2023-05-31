function getStudent(req, res) {
    const mysql = req.mysql; 
  
    const query = 'SELECT * FROM student';
  
    mysql.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.send("Error occurred");
      } else {
        res.send(results);
      }
/////c v n y k

    });
  };

  

  const createStudent = async function(req, res) {
    let mysql = req.mysql;
    const { email, name } = req.body;
    let create = `INSERT INTO STUDENT (name, email) VALUE ('${name}', '${email}')`;
    mysql.query(create, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.send(data);
    });
  };

  const updateStudent = async function(req,res){
    let mysql = req.mysql;
    

  }
  
  
  module.exports = { getStudent, createStudent};
  