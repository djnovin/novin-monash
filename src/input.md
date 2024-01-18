---
name: Architecture and Networks
description: 'Monash University - Markdown Notes Repository'
date: '2024-01-18'
tags:
  - monash
---

# Architecture and Networks

## Table of Contents

- [Architecture and Networks](#architecture-and-networks)
  - [Table of Contents](#table-of-contents)
  - [Module 1](#module-1)
    - [Topic 1: Introduction](#topic-1-introduction)
    - [Topic 2: Operating System](#topic-2-operating-system)
    - [Topic 3: Introduction to Computer Networks](#topic-3-introduction-to-computer-networks)
    - [Topic 4: TCP-IP Protocol Suite](#topic-4-tcp-ip-protocol-suite)
    - [Lab 1: Network Simulation](#lab-1-network-simulation)
    - [Lab 2: Linux Environment and Linux Command Line](#lab-2-linux-environment-and-linux-command-line)
  - [Module 2](#module-2)

## Module 1

### Topic 1: Introduction

#### Language of the Computer

1. Machine Language

- Binary
- Hexadecimal

```binary

00000000 00000000 00000000 00000000

```

```hexadecimal

0x00000000

```

2. Assembly Language

- English-like abbreviations representing elementary computer operations
  (translated to machine language by an assembler)
- Mnemonics

```assembly

mov eax, 0x00000000

```

3. High-Level Language

#### C

```c
#include <stdio.h>

int main() {
  printf("Hello, world!");
  return 0;
}
```

#### C++

```c++
#include <iostream>

int main() {
  std::cout << "Hello, world!";
  return 0;
}
```

#### Python

```python

print("Hello, world!")

```

#### Java

```java

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}

```

#### Rust

```rust
fn main() {
  println!("Hello, world!");
}
```

#### JavaScript

```javascript
console.log('Hello, world!')
```

#### Fetch/Execute Cycle

The fetch-execute cycle is the sequence of steps that the CPU follows to process
instructions stored in `ram` memory.

1. Fetch
2. Decode
3. Execute
4. Store
5. Update Program Counter

### Topic 2: Operating System

### Topic 3: Introduction to Computer Networks

#### Network Components

- Client (Host)
- Server (Host)
- Switch (Intermediate Device)
- Router (Intermediate Device)
- Comm-link (Physical Medium)

#### Network Types

- BN `Backbone Network`
- LAN `Local Area Network`
- MAN `Metropolitan Area Network`
- WAN `Wide Area Network`

#### Internet

- ISP `Internet Service Provider`
- IXP `Internet Exchange Point`
- NAP `Network Access Point`
- POP `Point of Presence`

#### Network Protocols

- ARP `Address Resolution Protocol`
- DHCP `Dynamic Host Configuration Protocol`
- DNS `Domain Name System`
- FTP `File Transfer Protocol`
- HTTP `HyperText Transfer Protocol`
- ICMP `Internet Control Message Protocol`
- IP `Internet Protocol`
- SMTP `Simple Mail Transfer Protocol`
- SSH `Secure Shell`
- TCP `Transmission Control Protocol`
- UDP `User Datagram Protocol`

#### Switching Techniques

- Circuit Switching
- Packet Switching

### Topic 4: TCP-IP Protocol Suite

#### Message Encapsulation

Protocol Data Unit `PDU` is a single unit of information transmitted among
networks.

| Layer       | PDU     | Contains |
| ----------- | ------- | -------- |
| Application | Message | HTTP     |
| Transport   | Segment | TCP      |
| Network     | Packet  | IP       |
| Data Link   | Frame   | Ethernet |
| Physical    | Bit     |          |

#### TCP/IP Model `Transmission Control Protocol/Internet Protocol`

The TCP/IP model is a conceptual model and set of communications protocols used
in the Internet and similar computer networks.

1. Physical Layer
2. Datalink Layer
3. Network Layer
4. Transport Layer
5. Application Layer

#### OSI Model `Open Systems Interconnection`

The Open Systems Interconnection model is a conceptual framework that
standardises the functions of a telecommunication system into seven layers.

The seven layers are:

1. Physical Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer
5. Session Layer
6. Presentation Layer
7. Application Layer

#### TCP/IP vs OSI

| TCP/IP                                | OSI                                 |
| ------------------------------------- | ----------------------------------- |
| 5 Layers                              | 7 Layers                            |
| Developed by US Department of Defense | Developed by ISO                    |
| TCP/IP is the most widely used model  | OSI is the most widely taught model |

#### Major Standards Bodies

- IEEE `Institute of Electrical and Electronics Engineers`
- IETF `Internet Engineering Task Force`
- ISO `International Organization for Standardization`
- ITU-T
  `International Telecommunication Union Telecommunication Standardization Sector`

### Lab 1: Network Simulation

### Lab 2: Linux Environment and Linux Command Line

```zsh
# Create a directory

mkdir <directory_name>

# Create a file

touch <file_name>

# Remove a file

rm <file_name>

# Remove a directory

rm -r <directory_name>

# Copy a file

cp <file_name> <new_file_name>

# Copy a directory

p -r <directory_name> <new_directory_name>

# Move a file

mv <file_name> <new_file_name>

# Move a directory

mv <directory_name> <new_directory_name>

# List files and directories

ls

# List files and directories with details

ls -l

# List files and directories with details and hidden files

ls -la

# Change directory

cd <directory_name>

# Change to parent directory

cd ..

# Change to home directory

cd ~

# Change to root directory

cd /

# Print working directory

pwd

# Create a symbolic link

ln -s <file_name> <link_name>

# Change file permissions

chmod <permission> <file_name>

# Change file ownership

chown <user_name> <file_name>

# Change file group

chgrp <group_name> <file_name>

```

## Module 2

### Topic 1: Physical Layer

#### Encapsulation and Decapsulation

#### Transmission Media

| Transmission Media | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| Coaxial Cable      | A single copper wire surrounded by layers of insulation and shielding. |
| Fiber Optic Cable  | A glass or plastic fiber that carries light.                           |
| Twisted Pair       | Two insulated copper wires arranged in a regular spiral pattern.       |

#### Analog and Digital Signals

| Analog Signal | Digital Signal |
| ------------- | -------------- |
| Continuous    | Discrete       |
| Infinite      | Finite         |
| Real          | Binary         |
| Sine Wave     | Square Wave    |

#### Addresses

| Address                    | Description                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Name                | A human-readable label that is assigned to an IP address to identify a host in a network.                                               |
| IP `Internet Protocol`     | A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.            |
| MAC `Media Access Control` | A unique identifier assigned to a network interface controller for use as a network address in communications within a network segment. |
| Port                       | A communication endpoint identified by a 16-bit number.                                                                                 |

#### Network Tools

| Network Tool | Description                                                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dig          | A network administration command-line tool for querying the Domain Name System.                                                                                                    |
| ifconfig     | A system administration utility in Unix-like operating systems for network interface configuration.                                                                                |
| ip           | A command-line interface utility for network configuration.                                                                                                                        |
| netstat      | A command-line utility that displays network connections for the Transmission Control Protocol, routing tables, and a number of network interface and network protocol statistics. |
| ping         | A computer network administration software utility used to test the reachability of a host on an Internet Protocol network.                                                        |
| traceroute   | A computer network diagnostic tool for displaying the route and measuring transit delays of packets across an Internet Protocol network.                                           |
| nslookup     | A network administration command-line tool for querying the Domain Name System.                                                                                                    |

#### Modulation

| Modulation                            | Description                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| AM `Amplitude Modulation`             | The amplitude of the carrier signal is varied in accordance with the amplitude of the modulating signal.           |
| FM `Frequency Modulation`             | The frequency of the carrier signal is varied in accordance with the amplitude of the modulating signal.           |
| PM `Phase Modulation`                 | The phase of the carrier signal is varied in accordance with the amplitude of the modulating signal.               |
| QAM `Quadrature Amplitude Modulation` | The amplitude and phase of the carrier signal is varied in accordance with the amplitude of the modulating signal. |

#### Encoding

| Encoding                              | Description                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manchester                            | A 1 bit is represented by a transition from one level to another at the middle of the bit period. A 0 bit is represented by a transition from one level to another at the beginning of the bit period. |
| NRZ-I `Non-Return to Zero Inverted`   | A 1 bit is represented by a transition from one level to another at the beginning of the bit period. A 0 bit is represented by no transition at the beginning of the bit period.                       |
| PM `Phase Modulation`                 | The phase of the carrier signal is varied in accordance with the amplitude of the modulating signal.                                                                                                   |
| Polar                                 | A 1 bit is represented by a positive voltage and a 0 bit is represented by a negative voltage.                                                                                                         |
| QAM `Quadrature Amplitude Modulation` | The amplitude and phase of the carrier signal is varied in accordance with the amplitude of the modulating signal.                                                                                     |
| Unipolar                              | A 1 bit is represented by a positive voltage and a 0 bit is represented by zero voltage.                                                                                                               |
| FM `Frequency Modulation`             | The frequency of the carrier signal is varied in accordance with the amplitude of the modulating signal.                                                                                               |

### Topic 2: Data Link Layer

### Topic 3: LAN and wireless LAN
