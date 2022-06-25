import { ethers } from 'ethers'
import Lottery from './Lottery.json'


export const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
        } catch (err) {
            alert(err)
        }
    } else {
        alert('No Wallet Found!')
    }
}

export const manager = async (setManager) => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            Lottery.address,
            Lottery.abi,
            signer
        )
        const response = await contract.manager()
        setManager(response)
    } catch (err) {
        alert(err)
    }
}

export const balance = async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            Lottery.address,
            Lottery.abi,
            signer
        )
        const response = await contract.balanceOf()
        alert('Balance(wei): ' + response.toString())
    } catch (err) {
        alert(err.toString())
    }
}

export const participate = async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            Lottery.address,
            Lottery.abi,
            signer
        )
        await contract.participate({
            value: ethers.utils.parseEther('1'),
        })
        alert('Participation Successful! Check your wallet for more info')
    } catch (err) {
        alert(err)
    }
}

export const declare = async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            Lottery.address,
            Lottery.abi,
            signer
        )
        const response = await contract.declareWinner()
        console.log(response)
        await response.wait()
    } catch (err) {
        alert("Cannot declare winner now! participants must be atleast 3")
    }
}
