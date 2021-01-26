# Community

You can make community site this example

<div align=center>
  
![free-icon-community-1189161](https://user-images.githubusercontent.com/19648818/105666002-985e3a80-5f1b-11eb-93df-ec4fefb90a47.png)

</div>


## 👫 How to setting Mysql Database?

post_list database setting
```
CREATE DATABASE DATABASENAME CHARACTER SET utf8 COLLATE utf8_general_ci;
```

```
USE DATABASENAME
```

```
CREATE TABLE `post_list` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `small_title` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

user_info database setting
```
CREATE TABLE `user_info` (
  `id` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## ❔ How to use ?
### 1. Enter 'npm start' at terminal

### 2. Open 'index.html'

### 3. Click F12 and check make it's working
