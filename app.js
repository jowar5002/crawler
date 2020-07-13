const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');

const URL = "https://www.flipkart.com/search?q=mobiles";

let arr = []; //creating an array

request(URL, function(err, res, body) {
  if (err) {
    console.log(err, "error occured while hitting URL");
  } else {
    let $ = cheerio.load(body); //loading of complete HTML body

    $('div._1HmYoV > div.col-10-12>div.bhgxx2>div._3O0U0u').each(function(index) {
      const link = $(this).find('div._1UoZlX>a').attr('href');
      const name = $(this).find('div._1-2Iqu>div.col-7-12>div._3wU53n').text();
      console.log(link); //link for smartphone
      console.log(name); //name of smartphone

      let object = {
        link: link,
        name: name,
      } //creating an object
      fs.writeFile('data.txt', arr, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });

    });
  }
});
