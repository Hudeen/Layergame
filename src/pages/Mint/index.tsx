import React from "react"
import "./styles.css"
import NFT from "../../shared/assets/images/imgNFT.png"
export const Mint: React.FC = () => {
    return (
        <div className="mint">
            <section className="mint__main">
                <section className="mint__minted row">
                    <div className="minted__live">
                        <div className="minted__live__inner"/>
                    </div>
                    <div className="minted__num">465</div>
                    <div className="mint__text">Live Minted</div>
                </section>
                <h1 className="mint__title">
                    Remove borders <br/>
                        with <span>NFTs</span>
                        <br/>
share art freely
                </h1>
                <div className="mint__text">Discover the power of NFTs for a unique digital experience.</div>
                <section className="mint__main_button row">
                    <div className="mint__main_button__mintNow">Mint Now</div>
                    <div className="mint__main_remaining">
                        <h3>
                        0 / 777
                        </h3>
                        <p>Remaining NSTs</p>
                    </div>
                </section>
                <div className="mint__main__timer">
                    <div className="hours">
                        <div className="digit">00</div>
                        <p className="timer__text">hours</p>
                    </div>
                    <span className="divider">:</span>
                    <div className="minutes">
                    <div className="digit">34</div>
                        <p className="timer__text">minutes</p>
                    </div>
                    <span className="divider">:</span>
                    <div className="seconds">
                    <div className="digit">09</div>
                        <p className="timer__text">seconds</p>
                    </div>
                </div>
            </section>
            <img src={NFT} alt="MintImg" className="mint__main_mainimg" />
        </div>
    )
}