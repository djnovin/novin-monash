# WireShark

## 1. Filters for HTTP Request 

### 1.1. Filter for HTTP GET Request

```
http.request.method == "GET"
```

### 1.2. Filter for HTTP POST Request

```
http.request.method == "POST"
```


## 2. Filters for HTTP Response

### 2.1. Filter for HTTP 200 OK Response

```
http.response.code == 200
```

### 2.2. Filter for HTTP 404 Not Found Response

```
http.response.code == 404
```

### 2.3. Filter for HTTP 500 Internal Server Error Response

```
http.response.code == 500
```

### 2.4. Filter for HTTP 301 Moved Permanently Response

```
http.response.code == 301
```

### 2.5. Filter for HTTP 302 Found Response

```
http.response.code == 302
```

### 2.6. Filter for HTTP 304 Not Modified Response

```
http.response.code == 304
```

### 2.7. Filter for HTTP 401 Unauthorized Response

```
http.response.code == 401
```

### 2.8. Filter for HTTP 403 Forbidden Response

```
http.response.code == 403
```

### 2.9. Filter for HTTP 405 Method Not Allowed Response

```
http.response.code == 405
```

### 2.10. Filter for HTTP 406 Not Acceptable Response

```
http.response.code == 406
```

### 2.11. Filter for HTTP 407 Proxy Authentication Required Response

```
http.response.code == 407
```

### 2.12. Filter for HTTP 408 Request Timeout Response

```
http.response.code == 408
```


## 3. Filters for HTTP Request and response

### 3.1. Filter for HTTP GET Request and Response

```
http.request.method == "GET" && http.response.code == 200
```

### 3.2. Filter for HTTP POST Request and Response

```
http.request.method == "POST" && http.response.code == 200
```

### 3.3. Filter for HTTP GET Request and 404 Not Found Response

```
http.request.method == "GET" && http.response.code == 404
```

## 4. Filters for HTTP Request and Response with URL

### 4.1. Filter for HTTP GET Request and Response with URL

```
http.request.method == "GET" && http.response.code == 200 && http.request.uri contains "URL"
```

# 5 Filter SMTP Protocol

### 5.1. Filter for SMTP Request

```
smtp
```

### 5.2. Filter for SMTP Request and Response

```
smtp || smtp.response
```

### 5.3. Filter for SMTP Request and Response with Email Address

```
smtp || smtp.response || smtp contains "Email Address"
```

# 6. Filter for FTP Protocol

### 6.1. Filter for FTP Request

```
ftp
```

### 6.2. Filter for FTP Request and Response

```
ftp || ftp.response
```

### 6.3. Filter for FTP Request and Response with FTP Command

```
ftp || ftp.response || ftp contains "FTP Command"
```

# 7. Filter for Telnet Protocol

### 7.1. Filter for Telnet Request

```
telnet
```

