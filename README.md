本项目是利用 Django 框架来实现 sumo 和 cesium 的简单联合仿真。

## 使用方法

安装 requirements.txt 中所需依赖。

在使用之前，请设置好 /app/static/sumo/simulation.py 里面的数据库设置，并且在所选择的数据库中创建一个名为 data 的表格，并且在其中创建四列，分别是：

- TIMEID (int)
- CARID (varchar(20))
- LONGTITIDE (double)
- LATITUDE (double)

运行项目后，打开浏览器，在地址栏输入 http://127.0.0.1:8000/index/ 即可运行。

## 项目原理

Django 框架下，收到 request 之后，运行相应函数，异步运行 simulation.py 以及返回相应的 html 文件。

simulation.py 会进行 sumo 仿真，并且每一个仿真时间内都会将该时间内每一辆车的经纬度信息储存到数据库中。同时 html 文件中的 javascript 会利用 ajax 联合 python 访问数据库中的信息并返回。（ajax 图方便关闭了异步功能，等我学明白 javascript 就写递归）

获得信息后就将数据点加入 cesium 中，然后 cesium 可以异步进行模型的运动模拟。