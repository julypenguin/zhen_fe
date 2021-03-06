import React from 'react';
import damascus from '../../img/damascus.jpg'
import three from '../../img/three.png'
import carbon from '../../img/carbon.png'
import event from '../../img/event.jpg'
import newMessage from '../../img/newMessage.jpg'
import kitchen from '../../img/kitchen.jpg'
import mainView from '../../img//mainView.png'
import zhenBlack from '../../img//zhenBlack.png'


const Deshboard = () => {
    return (
        <>
            <section className='main-view f-jc'>
                <div className='main-view-img-fit'>
                    <img className='main-view-img-img' src={mainView} />
                </div>
                <div className='center-tools'>
                    <div className='center-tools-img'>
                        <div className='center-tools-img-fit'>
                            <img className='center-tools-img-img' src={zhenBlack} />
                        </div>
                    </div>
                    <div className='center-tools-search'>
                        <input className='center-tools-search-input' type='text' />
                        <span className='center-tools-search-button'>搜尋刀具</span>
                    </div>
                    {/* <div className='center-tools-icon'>臻</div> */}
                </div>
            </section>
            
            <section className='side-view'>
                <div className='side-view-inner'>
                    <div className='side-view-imgboxs'>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={damascus}></img>
                                    <div className='side-view-imgbox-words-red'>大馬士革系列</div>
                                </div>
                            </div>
                        </div>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={three}></img>
                                    <div className='side-view-imgbox-words-red'>三合鋼系列</div>
                                </div>
                            </div>
                        </div>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={carbon}></img>
                                    <div className='side-view-imgbox-words-red'>高碳鋼系列</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='side-view'>
                    <div className='side-view-imgboxs'>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={event}></img>
                                    <div className='side-view-imgbox-words-blue'>活動訊息</div>
                                </div>
                            </div>
                        </div>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={newMessage}></img>
                                    <div className='side-view-imgbox-words-blue'>最新消息</div>
                                </div>
                            </div>
                        </div>
                        <div className='side-view-imgbox'>
                            <div className='side-view-imgbox-inner'>
                                <div className='side-view-imgbox-fit'>
                                    <img className='side-view-imgbox-image' src={kitchen}></img>
                                    <div className='side-view-imgbox-words-blue'>廚房知識</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Deshboard;