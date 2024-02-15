


# Protocols

## HTTP

### Methods

- GET
- POST
- PUT
- DELETE

### Status Codes

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 500 Internal Server Error

### Headers

- Content-Type
- Accept
- Authorization
- Cache-Control
- Cookie
- Date
- Host

### Request

```
GET / HTTP/1.1
Host: www.example.com
Accept: text/html
```

### Response

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 123
```

## HTTPS

- HTTP over SSL/TLS
- Secure Sockets Layer / Transport Layer Security
- Encrypts data
- Authenticates Server
- Protects data integrity

## Electronic Mail (SMTP)

- Simple Mail Transfer Protocols
- Send and receive email
- Port 25

## File Transfer (FTP)

- File Transfer Protocols
- Send and receive files
- Port 21

## Secure File Transfer (SFTP)

- File Transfer Protocols over SSH
- Secure File Transfer Protocols
- Port 22

## SSH

- Secure Shell
- Remote login
- Secure file Transfer
- Port 22

## Telnet

- Remote login
- Port 23

## DNS

- Domain Name System
- Resolves domain names to IP addresses
- Port 53
  
## DHCP

- Dynamic Host Configuration Protocols
- Assigns IP addresses to devices
- Port 67

## SNMP

- Simple Network Management Protocols
- Monitor and manage network devices
- Port 161

## NTP

- Network Time Protocols
- Synchronize time across network devices
- Port 123

## LDAP

- Lightweight Directory Access Protocols
- Access and manage directory services
- Port 389

## IMAP

- Internet Message Access Protocols
- Retrieve email from Server
- Port 143

## POP3

- Post Office Protocols
- Retrieve email from Server
- Port 110

## SMTP

- Simple Mail Transfer Protocols
- Send email
- Port 25

# Transmission Control Protocol (TCP)

- Connection-oriented
- Reliable
- Error checking
- Flow Control
- Slower than UDP

# User Datagram Protocol (UDP)

- Connectionless
- Unreliable
- No error checking
- No flow Control
- Faster than TCP

# Ports

- 0-1023: Well-known Ports
- 1024-49151: Registered Ports
- 49152-65535: Dynamic/Private Ports

# OSI Model1

- 7. Application
- 6. Presentation
- 5. Session
- 4. Transport
- 3. network
- 2. Data Link
- 1. Physical

# TCP/IP Model1

- 4. Application
- 3. Transport
- 2. Internet
- 1. Network Interface

# Network devices

## Hub

- Layer 1
- Broadcasts data to all devices
- No intelligence
- No Security

## Switch

- Layer 2
- Forwards data to specific devices
- MAC address table
- More secure than Hub
  
## Router

- Layer 3
- Connects different networks
- Routes data between networks
- IP address table

## Firewall

- Layer 4
- Filters traffic
- Blocks unwanted traffic
- Stateful inspection

## Proxy

- Layer 7
- Acts as intermediary
- Caches Data
- Filters traffic

## Load Balancer

- Layer 7
- Distributes traffic
- Redundancy
- Scalability

## Access Point

- Layer 2
- Connects wireless devices to networks
- Wireless LAN

## Repeater

- Layer 1
- Extends network range
- Amplifies signals



