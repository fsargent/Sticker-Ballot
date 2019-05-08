Sticker Voting

This application generates ballots for Sticker Voting.

In setup, input the issues and candidates you want voted on.
Input the number of ballots to be generated.

Insert a YubiKey (?), which will sign the ballots.

For each ballot:

- Generate a Ballot Sheet, with a unique ID
- Generate a Sticker Sheet with a Sticker for each option
  - Each sticker has both the text, and a digitally signed QR code that includes
    - The QR Code includes:
      - Sticker UUID
      - Ballot UUID
      - If Measure:
        - Measure Name
        - Measure UUID
        - Affirm / Reject
      - If Candidate:
        - Election UUID (One candidate may be in two races)
        - Candidate UUID
        - Candidate Name
      - Digital Signature

Output:
X Ballot Sheets
X Sticker Sheets
Y Registration Forms (to count the number of voters to the number of submitted ballots)
Z Validation Sheet (QR Code Public Key for verifying ballots)

Instructions:

```bash
openssl genrsa -out private.key 2048
openssl rsa -pubout -in private.key -out public.key
```

iPhone App Requirements

- Show it both a signed QR code and a public key, and it'll tell you if it's valid.
