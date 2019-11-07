# custom-belongs-to-many-field v1.0.0
### Installation
```sh
$ composer require lathanhvien/custom-belongs-to-many-field  
```
### Usage
This package extend from Benjacho/belongs-to-many-field-nova package, check it to know all support functions.  
I add more function `optionsShow($array)` to show columns of $array on Index and Detail page. Use it like follow:  
```sh
use Pifpif\CustomBelongsToManyField\CustomBelongsToManyField;  

CustomBelongsToManyField::make('Athletes', 'athletes', 'App\Nova\Athlete')
    ->optionsLabel('first_name')  
    ->optionsShow(['first_name','last_name'])  
```
### Support
If you have any ideas about this package, feel free to contact me at gmail: b.thanhdung@gmail.com or skype: xprotoprotox
### License
This package is available under the [MIT](https://opensource.org/licenses/mit-license.php) license. 