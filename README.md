# DrawIt

sandaruchamath@gmail.com Chamath Ranasinghe rexzing IA6. This library can be used to easily generate configaration files for popular javascript grap ibraries like c3, chartjs, d3. At the oment this only support c3.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



### Installing

Download the drawit.js frile from /dist folder and import it in your html.


```
  <script src="drawit.js"></script>
```

And call DI.generate method as follows.

```
 DI.generate(url, div_id, callback, chart_type, axises);
 // url - url of the data file. Can be csv, tsv or a json. Find example data files
 //       in samples/data_files
 // div_id - Id of the div that you wish to put the grahp
 // callback - callback method after generating configurations( example - In c3 c3.generate method)
 // chart_type - chart tyoe of your desired grahp. At the momment we support (spline, area, bar, line, step)
 // axises - {x:'', y:''} name of the columns on data file witch you going a make as x and y axises

```

## Example

Examples using drawit,js library with c3 can find in samples/index.html 

## Dependency

+ [d3-fetch](https://github.com/d3/d3-fetch) `^1.1.0`

## Authors

* **Chamath Sandaru** - *Initial work* - [rexzing](https://github.com/rexzing)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


