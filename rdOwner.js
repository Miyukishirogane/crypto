const getSideOwner = () => {
    return new ethers.Wallet(adminKey.privateKey, sideProvider);
}