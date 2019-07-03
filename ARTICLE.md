# Sticker Voting

StickerVoting is a proof of concept for a cheap, verifiable and secure method of voting, utilizing digital signatures, QR codes, and a bit of glue.

At the Center for Election Science we want to be able to easily run mock elections while we're at conferences. At first I'd considered putting together an Arudino based controller for people to vote with - but we have a philosophical distrust of computer based voting machines. At the same time, we'd really like to have the benefits of machine tabulation. How can we get the benefit of optical scanning without the expensive machines, and proprietary solutions? QR Codes!

One of the primary benefits of a proprietary solution is that it's difficult to commit ballot stuffing -- counterfitting ballots. We can solve this by digitally signing each ballot with its own id. But this begs the question, if you have all the QR code options on a page, how would a voter indicate which QR code represented the candidate they supported? Should they check a box to legitimize a QR code? Fill it in, some how? All terrible ideas. If only there were a way that voters could select specific QR codes from all their options, and move them over to their ballot. This is where stickers come in. Instead of selecting your option, you peel off the sticker and apply it to your ballot.

## Election setup

In order to print ballots, you will require a printer, regular paper, sticker paper, a clean non-networked computer with an implementation of StickerVote software installed, and a Yubikey.

The elections official will configure the options available for voters, and then when ready, insert the YubiKey to digitally sign the QRCode sticker ballots, which will then generate PDFs to be printed.

## Voting

When a voter walks into a voting place, they're asked to register, which marks their name off a list, and their Ballot ID is recorded as being distributed to a voter - standard practice. They receive two sets of sheets - one set of sticker sheets and one set of ballot sheets. The sticker sheet contains 8-10 rectangular stickers, one for each option they can choose from. Each sticker contains a QR code and a text description of the option. The ballot sheet contains basic instructions, a ballot id, and ballot id QR code. To vote the voter applies the stickers of the candidates they support to the ballot sheet. To prevent the use of any unused choices, they shred the left over sticker sheet with the remaining stickers.

Each sticker has both the text, and a digitally signed QR code that includes:

- Ballot Id
- Measure Name (The name of the race, ie "Measure C" or "Office of the President")
- Measure Id
- Option Name (ie, candidate name or "Yes/No" for a Measure )
- Option Id
- Digital Signature

## Tabulation

Tabulation is performed by scanning the ballot with a tabulation app on a mobile device with a camera. The tabulation server is a simple register of all the submissions. It records all inputs it receives, even if the digital signature is invalid, so that it can record any potential attacks.  
As is standard practice, samples of ballots should be hand counted to ensure consistency. If there is a discrepancy between the hand count and the tabulation then the register should give insight as to which ballots may not have yet been counted.
Because each sticker is unique and digitally signed, there is no risk of double-counting ballots.

The tabulation server can show a live public feed of results when voting has closed. Only the base results are released, no ballot id information is made publicly available.

## Advantages

- Very cheap to setup, all you need to vote with is a printer and sticker paper
- Tabulation can happen on mobile devices
- Quick and easy to tabulate
- Paper based, with physical proof of every vote
- Tamper resistant
- Easy to understand and use
- Works with common open source technologies
- No pens required (!)
- Works easily with internationalization

## Disadvantages

- How should write in votes work?

## Questions

- Should people be allowed to submit their own votes to the tabulation machine?
- How likely would it be that they would take pictures of their ballots?
- How can the registration process be improved?
