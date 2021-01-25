# Community

You can make community site this example

<div align=center>
  
![free-icon-community-1189161](https://user-images.githubusercontent.com/19648818/105666002-985e3a80-5f1b-11eb-93df-ec4fefb90a47.png)

</div>


## 👫 How to setting Mysql Database?
```
CREATE TABLE `post_list` (
	`title` VARCHAR(100) NOT NULL COLLATE 'utf8_general_ci',
	`small_title` VARCHAR(100) NULL COLLATE 'utf8_general_ci',
	`content` VARCHAR(1000) NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`title`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
```
