# Problem Statement

You've been provided seven Ethernet frames in hexadecimal string form. Your task is to
decode these frames to obtain the transmitted contents. Upon decoding the contents,
generate the MD5 hash of them and submit the hash as the solution to this problem.

## Inputs

The directory `packet-hex-strings` contains seven text files, numbered `1.txt` through
`7.txt`. Each file contains a hexadecimal string of an Ethernet frame.

## Content to Hash

Upon decoding each of the seven Ethernet frames, you should concatenate the bodies into
a single file. Exclude any protocol headers when concatenating the decoded packet bodies.

Upon decoding the contents of the frames into a single file, generate the MD5 hash of
that file.

## Questions

Please reach out to Tyler Thieding (`tnthiedi@ra.rockwell.com`) with any questions about
this problem.
