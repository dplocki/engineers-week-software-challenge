# Using MD5 hash to capture the flag
The software challenges will have you produce output in various. To validate these form a checksum will  be used.

This challenge is to help you get started by producing the expected output using the methods expected for all of the challenges.

## Validating output for challenges
Each challenge will describe the desired output.

For those creating these challenges we wanted to provide the greatest flexibility for you (as participants) and allow you to write code in any language you'd like. We also wanted a common method to validate the outcome. It could be generating a file, text, binary output.

The common method we chose is to generate the output and transform it and ultimately have the output generate a MD5 hash. This is a simple 32 character string of hex digits.

In order to capture the flags for the challenges you will need to produce a MD5 hash value of the output. It is the value that is used to capture the flag.

Each challenge will give specific guidance for generating the Flag.

In general, you will produce text output, encode it into UTF-8 and generate an MD5 hash.

This challenge will get you started creating the MD5 hashes with a simple task.

We'll even provide examples for several languages.

## The challenge
This challenge will have you process an input file as lines of text. You are to generate the length of each line.

## END-OF-LINE
End of lines are marked as just \n. having \r\n will not generate correct results.

## END-OF-FILE
The last line of the file ends with a new-line. So loading the file in a text editor the file will appear to have a empty last line due to the newline at the end of the previous line.

## Example input and output displaying new lines
A good first step is this 'Hello,world' version.
Try to get your code to generate the proper output and MD5 flag value.

Input:
```
Hello, world\n
This tests the line lengths\n
of multiple lines\n
```
Expected output
```
12\n
27\n
17\n
```

Expected MD5 value
```
fbdd4c7c05d0baf5b247a9c55352f3b5
```

## Capturing the challenge flag
Once you are generating a proper MD5 flag for the hello, world example. Use the attached input file to generate the final MD5 flag for this challenge. Enter the flag to finish the challenge.


# Examples code for generating MD5
Here are some examples for 
- python
- dot net core
- nodejs

## Python

``` python
import hashlib 

str = "CommonGatewayPlatform"
result = hashlib.md5(str.encode('utf-8')) 
hash = result.hexdigest()
test = "ce5c8add73ce9da0b055bd44b491e6f5"
if hash == test:
    print ("they match")
```

## dot net 

``` cs
using System;
using System.Security.Cryptography;
using System.Text;
 class Program
    {
        static void Main(string[] args)
        {
            string source = "CommonGatewayPlatform";
            using (MD5 md5Hash = MD5.Create())
            {
                string hash = GetMd5Hash(md5Hash, source);
                if (hash == "ce5c8add73ce9da0b055bd44b491e6f5") {
                    Console.WriteLine("They Match: {0}", hash);
                } else {
                    Console.WriteLine("They DON'T Match: {0}", hash);
                }
            }
        }
        static string GetMd5Hash(MD5 md5Hash, string input)
        {
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
            StringBuilder sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
    }
```


## NodeJs

``` js
const crypto = require('crypto')
let hash = crypto.createHash('md5').update('CommonGatewayPlatform').digest("hex")
let test = "ce5c8add73ce9da0b055bd44b491e6f5"
if(hash==test) {
    console.log("They match")
}
```

## Answer and Flags
```
Flags:
e95c4f39189e72087cb5ea8ba31f8680 // UTF-8 LF
499c44a4a242dc2b3a2522f1c1426e86 // UTF-8 CRLF
```
