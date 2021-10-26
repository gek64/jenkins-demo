# jenkins demo

## 系统需求

- 使用`jenkins`编译、测试、部署运行`nodejs`模块作为例子
- 需要`CI/CD`机器安装`nodejs`，支持`npm ci`的`npm`，`git`，`tar`，`systemd`
- `jenkins`安装`pipeline`插件、`git`插件，并在全局工具设置中设置好了`git`的可执行文件路径，`git`所需的账户与密码(如果需要的话)

## 使用说明

### pipeline设置

- 流水线选择使用`git`，`git`地址填写 `https://github.com/gek64/jenkins-demo.git` 
- 凭证设置好(如果需要的话)
- `git pull` 轮询请按需设置，例如`H H/1 * * *`每小时检测一次状态

### 设置并启用服务

```bash
# 新建服务
nano /etc/systemd/system/jenkins-demo.service

# 启用服务
systemctl enable jenkins-demo
```

#### jenkins-demo.service

```ini
[Unit]
Description=jenkins demo
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/var/local/package/
ExecStart=/usr/bin/npm run dev
ExecStop=/usr/bin/pkill node
Restart=always
SyslogIdentifier=jenkins demo

[Install]
WantedBy=multi-user.target
```

### 启动服务

- 选择立刻构建

- 如果`pipeline`完全通过，访问`http://127.0.0.1:5000`来查看运行效果
