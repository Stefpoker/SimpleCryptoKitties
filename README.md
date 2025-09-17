# SimpleCryptoKitties 🐱

A minimal NFT breeding game built with Solidity and ERC721 (inspired by CryptoKitties).  
The contract allows users to own, breed, and create unique NFT cats.

---

## ✨ Features
- ERC721 based on OpenZeppelin
- Two generation-0 cats are created upon deployment
- `breed(momId, dadId)` lets you create new NFTs
- Transparent and fully on-chain logic

---

## 🛠 Tech Stack
- Solidity ^0.8.17
- OpenZeppelin Contracts
- Hardhat (for local testing and deployment)

---

## 🚀 How to Run
1. Clone repo:
```bash
git clone https://github.com/Stepfoker/SimpleCryptoKitties.git
cd SimpleCryptoKitties

npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts

npx hardhat compile

npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

4. Внизу нажми **Commit new file**.  

---

## ✅ В итоге
У тебя в репозитории будет:  
- `contracts/SimpleCryptoKitties.sol` (контракт)  
- `scripts/deploy.js` (скрипт)  
- `README.md` (описание)  

После этого ссылка на твой репозиторий (`https://github.com/Stepfoker/SimpleCryptoKitties`) готова для вставки в HackQuest 🚀  

---

Хочешь, я сразу дам тебе короткий **Project Intro (200 символов)** и **Description (для HackQuest)**, чтобы ты просто скопировал туда?
