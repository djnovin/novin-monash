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
    - [Topic 1: Physical Layer](#topic-1-physical-layer)
      - [Network Topologies](#network-topologies)
      - [Mediums for Transmission](#mediums-for-transmission)
      - [Transmission of Digital Signals](#transmission-of-digital-signals)
      - [Attenuation](#attenuation)
      - [Encapsulation and Decapsulation](#encapsulation-and-decapsulation)
      - [Transmission Media](#transmission-media)
      - [Analog and Digital Signals](#analog-and-digital-signals)
    - [Topic 2: Data Link Layer](#topic-2-data-link-layer)
    - [Topic 3: LAN and wireless LAN](#topic-3-lan-and-wireless-lan)
  - [Module 3](#module-3)

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

2.Assembly Language

- English-like abbreviations representing elementary computer operations
  (translated to machine language by an assembler)
- Mnemonics

```assembly

mov eax, 0x00000000

```

3.High-Level Language

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

#### Network Topologies

##### Bus Topology

- All devices are connected to a single cable that runs from one end of the
  network to the other.

##### Ring Topology

- All devices are connected to one another in the shape of a closed loop, so
  that each device is connected directly to two other devices, one on either
  side of it.

##### Star Topology

- All devices are connected to a central device, called a hub or a switch.

##### Mesh Topology

- All devices are connected to one another so that there is a direct connection
  between every pair of devices.

##### Tree Topology

- All devices are connected to a central device, called a hub or a switch, which
  is then connected to other central devices.

##### Hybrid Topology

- A combination of two or more topologies.

#### Mediums for Transmission

##### Coaxial Cable (Coax)

- A single copper wire surrounded by insulation, a braided metal shield, and a
  plastic outer layer.

##### Fiber Optic Cable

- A cable that uses light to transmit data.

##### Twisted Pair Cable

- A cable that consists of two copper wires twisted around each other.

#### Transmission of Digital Signals

##### Baseband Transmission

- A transmission technique that uses a single channel for data.

##### Broadband Transmission

- A transmission technique that uses multiple channels for data.

##### Transmission Impairments

#### Attenuation

##### Understanding Attenuation

- **What:** A `reduction` in the energy of a signal.

- **Why:** The `law of conservation` of energy states that energy cannot be
  created or destroyed, only transformed. As a signal travels through a medium,
  some of its energy is transformed into heat as a result of `resistance` in the
  medium. This causes the signal to lose energy, which is known as attenuation.

- **How:** `Decibels` (dB) are used to measure the amount of attenuation in a
  signal. The higher the number of decibels, the greater the attenuation. We can
  calculate the amount of attenuation in a signal using the following formula:

  ```markdown
  dB = 10 \* log(P1/P2)
  ```

  Where:

  - `P1` is the power of the original signal. (Watts)
  - `P2` is the power of the attenuated signal. (Watts)

- **Example:** A signal with a power of 10 watts is attenuated to 5 watts. How
  many decibels of attenuation does the signal have?

  ```markdown
  dB = 10 _ log(10/5) dB = 10 _ log(2) dB = 10 \* 0.301 dB = 3.01
  ```

##### Distortion

When a signal is transmitted through a medium, it is distorted. This distortion
is caused by the medium's inability to transmit the signal perfectly. There are
several types of distortion that can occur:

1. Dispersion
2. Frequency - Related Distortion
3. Nonlineararity
4. Noise
5. Limited Bandwidth
6. Interference
7. Impulse Response

##### Noise

- An unwanted signal that interferes with the transmitted signal.

1. Thermal Noise
2. Induced Noise
3. Crosstalk
4. Impulse Noise

##### Signal-to-Noise Ratio (SNR)

- A ratio of the noise that is wanted to the noise that is unwanted.
- The higher the SNR, the better the quality of the signal.
- The lower the SNR, the worse the quality of the signal.

##### Calculating SNR

```markdown
SNR = Average Signal Power / Average Noise Power
```

Where:

- `Average Signal Power` is the average power of the signal. (Watts)
- `Average Noise Power` is the average power of the noise. (Watts)

#### Encapsulation and Decapsulation

- Encapsulation is the process of adding a header to a message.
- Decapsulation is the process of removing a header from a message.

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

## Module 3

### Topic 1

#### Networks and Subnets

A network is a group of devices connected together to share resources. A subnet
is a group of devices connected together on the same network.

- A network is identified by its network address.
- A subnet is identified by its subnet mask.

Typically organizations buy a block of IP addresses from an Internet Service
Provider (ISP). The ISP allocates a network address and a subnet mask to the
organization.

- Example: Monash University has a network address of `130.194.0.0/16.`

The organization then allocates a subnet address and a subnet mask to each
subnet on the network.

- Subnets roughly correspond to LANs (Local Area Networks). Thus, you can
  imagine a subnet as a region of a network.

##### Anology

- Network: PostCode
- Subnet: Street
- Device (Host ID): Building Number

#### IP `Internet Protocol`

##### IPv6 `Internet Protocol version 6`

IPv6 is the most recent version (1998) of the Internet Protocol, the
communications protocol that provides an identification and location system for
computers on networks and routes traffic across the Internet. IPv6 was developed
by the Internet Engineering Task Force to deal with the long-anticipated problem
of IPv4 address exhaustion. To put this into perspective, under IPv4 there are
232 possible combinations, which offers just under 4.3 billion unique addresses.
Under IPv6, there are 2128 possible combinations, or 340 undecillion unique
addresses.

IPv6 addresses are 128-bit IP address written in hexadecimal and separated by
colons. An example of an IPv6 address is
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

Typical allocation of IPv6 address space:

- IANA + RIR: /23
- ISPs (9 Bits): /32
- Company/Organization (16bits): /48
- Subnets (16bits): /64
- Interface ID (64 bits): /128

##### Configuring IP Address

Every device on a network needs an IP address to communicate with other devices.
IP addresses are usually assigned by a DHCP server. However, you can also
manually configure IP addresses on a device.

- Doesn't change for servers and routers so you must manually configure them
  with a static IP address.
- Probably doesn't need to change for workstations but configuring them with a
  static IP address is a lot of work.
- Infeasible for mobile devices to have a static IP address so they are
  configured with a dynamic IP address.

Dynamic Host Configuration Protocol (DHCP) is a network management protocol used
on Internet Protocol (IP) networks for automatically assigning IP addresses and
other communication parameters to devices connected to the network using a
client-server architecture.

- Send broadcast message to DHCP server to get an address and subnet mask.
- Addresses are only leased for a limited time.
- Makes efficient use of limited IPv4 address space.
- Much easier for admins to manage than static addresses.

Dynamic addressing in IPv6 is handled by a different protocol called Stateless
Address Autoconfiguration (SLAAC). SLAAC is a method for configuring IPv6
addresses on a device without using a DHCP server.

- Uses a combination of the device's MAC address and the network prefix to
  generate a unique IPv6 address.
- This is called an EUI-64 address.
- EUI-64 stands for Extended Unique Identifier.
- It is a method for assigning a unique 64-bit address to a device.
- It is used in IPv6 and IEEE 802 networks.
- The first 24 bits of an EUI-64 address are the same as the OUI of the device's
  MAC address.
- The last 40 bits are generated from the device's MAC address and the network
  prefix.
- The network prefix is the first 64 bits of the IPv6 address.

Send a multicast message to the network prefix to get the network prefix and
subnet mask.

- The network prefix is usually provided by a router advertisement message from
  a router on the network.
- The router advertisement message also provides the network prefix to other
  devices on the network.

Autoconfiguration in IPv6 is handled by a different protocol called Neighbor
Discovery Protocol (NDP). NDP is a protocol in the Internet protocol suite used
with Internet Protocol Version 6 (IPv6). It operates at the link layer of the
Internet model (RFC 1122), and is responsible for address autoconfiguration of
nodes, discovery of other nodes on the link, determining the addresses of other
nodes, duplicate address detection, finding available routers and Domain Name
System (DNS) servers, address prefix discovery, and maintaining reachability
information of other active neighbor nodes.

- Advertised prefix + self-generated interface ID = IPv6 address.
- Check for duplicate addresses using Duplicate Address Detection (DAD).

### Topic 2: Application Layer

#### HTTP `HyperText Transfer Protocol`

The Hypertext Transfer Protocol is an application layer protocol for
distributed, collaborative, hypermedia information systems. HTTP is the
foundation of data communication for the World Wide Web.

#### Electronic Mail

SMTP: Simple Mail Transfer Protocol

POP3: Post Office Protocol

IMAP: Internet Message Access Protocol

#### Telnet and SSH

#### Other Applications

FTP: File Transfer Protocol

IM: Instant Messaging

## Module 5

### Topic 1: Network Security

### Topic 2: VPNs

## Module 6

### Topic 1: Backbone Networks and WAN/MAN

### Topic 3: The Internet
