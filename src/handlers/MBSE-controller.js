/*
 * Copyright Paramount soft. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');
const { getContractObject } = require('../../utils/util.js');
const { NETWORK_PARAMETERS, DOCTYPE } = require('../../utils/Constants');
const logger = require('../../logger')(module);
// const { formatReferences, formatAssetInput } = require('../../utils/FormatStruct');
// const AssetType = require('../../models/AssetType')

class TokenController {

	constructor() {
	}

	async addMBSEDetails(req, res, next) {
		try {
			console.log('*******Add MBSE Details *******')

			let orgId = req.body.ownerOrgId;
			let orgName = "org" + orgId
			let user = req.body.userId;
			let tokenDef = req.body.data;

			const gateway = new Gateway();
			let contract = await getContractObject(orgName, user, NETWORK_PARAMETERS.CHANNEL_NAME, NETWORK_PARAMETERS.CHAINCODE_NAME, gateway)
			// let tokenData = JSON.parse(tokenDef);
			console.log('----------Creating MBSE details------------\n', tokenDef)
			let stateTxn = contract.createTransaction('CreateDetailedMBSEModel');
			let tx = await stateTxn.submit(JSON.stringify(tokenDef));
			console.log('*** MBSE Details Added: committed');
			// let tx ='xxxxxxxxxxxxxxxxx'
			return res.status(200).send({
				status: true,
				message: "MBSE Details Added Successfully",
				txid: tx.toString()
			});
		} catch (error) {
			console.log(error.message)
			logger.error({ userInfo: req.loggerInfo, method: 'CreateDetailedMBSEModel', error })
			return res.status(500).send({
				status: false,
				message: error.message
			});
		}
	}

	async addMBSEPrivateDetails(req, res, next) {
		try {
			console.log('*******Add MBSE Details *******')
	
			let orgId = req.body.ownerOrgId;
			let orgName = "org" + orgId
			let user = req.body.userId;
			let tokenDef = req.body.data;
	
			const gateway = new Gateway();
			let contract = await getContractObject(orgName, user, NETWORK_PARAMETERS.CHANNEL_NAME, NETWORK_PARAMETERS.CHAINCODE_NAME, gateway)
			// let tokenData = JSON.parse(tokenDef);
			console.log('----------Creating MBSE details------------\n', tokenDef)
			let stateTxn = contract.createTransaction('CreateDetailedMBSEModelPrivate');
			let tx = await stateTxn.submit(JSON.stringify(tokenDef));
			console.log('*** MBSE Details Added: committed');
			// let tx ='xxxxxxxxxxxxxxxxx'
			return res.status(200).send({
				status: true,
				message: "MBSE Details Added Successfully",
				txid: tx.toString()
			});
		} catch (error) {
			console.log(error.message)
			logger.error({ userInfo: req.loggerInfo, method: 'CreateDetailedMBSEModel', error })
			return res.status(500).send({
				status: false,
				message: error.message
			});
		}
	}
	
	async updateMBSEPrivateDetails(req, res, next) {
		try {
			console.log('*******Update MBSE Details *******')
	
			let orgId = req.body.ownerOrgId;
			let orgName = "org" + orgId
			let user = req.body.userId;
			let tokenDef = req.body.data;
	
			const gateway = new Gateway();
			let contract = await getContractObject(orgName, user, NETWORK_PARAMETERS.CHANNEL_NAME, NETWORK_PARAMETERS.CHAINCODE_NAME, gateway)
			// let tokenData = JSON.parse(tokenDef);
			console.log('----------Creating MBSE details------------\n', tokenDef)
			let stateTxn = contract.createTransaction('UpdateDetailedMBSEModelPrivate');
			let tx = await stateTxn.submit(JSON.stringify(tokenDef));
			console.log('*** MBSE Details Update: committed');
			// let tx ='xxxxxxxxxxxxxxxxx'
			return res.status(200).send({
				status: true,
				message: "MBSE Details Updated Successfully",
				txid: tx.toString()
			});
		} catch (error) {
			console.log(error.message)
			logger.error({ userInfo: req.loggerInfo, method: 'CreateDetailedMBSEModel', error })
			return res.status(500).send({
				status: false,
				message: error.message
			});
		}
	}
	



async deleteMBSEPrivateDetails(req, res, next) {
	try {
		console.log('*******Delete MBSE Details *******')

		let orgId = req.body.ownerOrgId;
		let orgName = "org" + orgId
		let user = req.body.userId;
		let mbseId = req.body.mbseId;
		
		console.log("mbseId----------", mbseId)
		const gateway = new Gateway();
		console.log('----------Deleting my MBSE details------------\n', mbseId)
		let contract = await getContractObject(orgName, user, NETWORK_PARAMETERS.CHANNEL_NAME, NETWORK_PARAMETERS.CHAINCODE_NAME, gateway)
		let stateTxn = contract.createTransaction('DeleteDetailedMBSEModelPrivate');
		stateTxn.setEndorsingOrganizations('Org1MSP');
		let tx = await stateTxn.submit(mbseId);
		
		console.log('*** MBSE Details deleted: committed');
		// let tx ='xxxxxxxxxxxxxxxxx'
		return res.status(200).send({
			status: true,
			message: "MBSE Details deleted Successfully",
			txid: tx.toString()
		});
	} catch (error) {
		console.log(error.message)
		logger.error({ userInfo: req.loggerInfo, method: 'DeleteDetailedMBSEModel', error })
		return res.status(500).send({
			status: false,
			message: error.message
		});
	}
}


async addMBSESummary(req, res, next) {
	try {
		console.log('*******Add MBSE Sumamry *******')

		let orgId = req.body.ownerOrgId;
		let orgName = "org" + orgId
		let user = req.body.userId;
		let tokenDef = req.body.data;

		const gateway = new Gateway();
		let contract = await getContractObject(orgName, user, NETWORK_PARAMETERS.CHANNEL_NAME, NETWORK_PARAMETERS.CHAINCODE_NAME, gateway)
		// let tokenData = JSON.parse(tokenDef);
		console.log('----------Creating MBSE details------------\n', tokenDef)
		let stateTxn = contract.createTransaction('CreateSummaryMBSEModel');
		let tx = await stateTxn.submit(JSON.stringify(tokenDef));
		console.log('*** MBSE Summary Added: committed');
		// let tx ='xxxxxxxxxxxxxxxxx'
		return res.status(200).send({
			status: true,
			message: "MBSE Summary Added Successfully",
			txid: tx.toString()
		});
	} catch (error) {
		console.log(error.message)
		logger.error({ userInfo: req.loggerInfo, method: 'CreateSummaryMBSEModel', error })
		return res.status(500).send({
			status: false,
			message: error.message
		});
	}
}




}


module.exports = TokenController;
