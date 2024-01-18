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

### Topic 4: TCP-IP Protocol Suite

#### TCP/IP Protocol Stack

#### OSI Model `Open Systems Interconnection`

The Open Systems Interconnection model is a conceptual framework that
standardises the functions of a telecommunication system into seven layers.

The seven layers are: --- Lower Layers ---

1. Physical Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer --- Upper Layers ---
5. Session Layer
6. Presentation Layer
7. Application Layer

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

cp -r <directory_name> <new_directory_name>

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
