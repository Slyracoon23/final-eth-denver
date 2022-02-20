const { expect, assert } = require("chai");
const { ethers, artifacts } = require("hardhat");


describe("Deeds contract", function() {

    let deeds;

    let deeds_contract;

    let owner;
    let addr1;
    let addr2;
    let addrs;
    
    /// @notice Depolyment on contract
    beforeEach(async function() {

        deeds = await ethers.getContractFactory("DeedsERC721");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        deeds_contract = await deeds.deploy();


    });

    it("test name", async function() {


        expect(await deeds_contract.name()).to.equal("Deeds-NFT");

    });

    it("test setAllowList", async function() {
        deeds_contract.setAllowAddr(addr1.address, 1);

        expect(await deeds_contract.connect(addr1).isAvailableToMint(addr1.address)).to.equal(1);


    });

    it("test mint", async function() {
        deeds_contract.setAllowAddr(addr1.address, 1);


        try{
            deeds_contract.connect(addr1).mint(1);
           
           } catch(error) {
            expect.fail("Should have thrown before");
           }


    });

    it("test fail mint", async function() {
        deeds_contract.setAllowAddr(addr1.address, 1);


        try{
            deeds_contract.connect(addr1).mint(2);

            expect.fail("Should have thrown before");

           
           } catch(error) {


           }


    });
    // it("test Fail setGovernanceFee", async function() {

    //     try{
    //      await settings_contract.setGovernanceFee(110);
        
    //      expect.fail("Should have thrown before");
    //     } catch(error) {
            
    //     expect(error.message).to.have.string("fee too high");
    // }

    // });





});