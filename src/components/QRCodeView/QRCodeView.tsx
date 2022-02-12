import React from 'react';
import {ContextWrapper, ImageWrapper, QRWrapper} from './QRCodeView.styles';
import QRCode from './QRCode.png';

const QRCodeView = () => {
	return (
		<QRWrapper>
			<ContextWrapper>
				<h2>Welcome visiting Spending App</h2>
				<h3>Scan the QR Code with your mobile phone camera so you can use it on mobile.</h3>
				<h3>Thank you.</h3>
			</ContextWrapper>
			<div>
				<ImageWrapper src={QRCode} alt='QRCode'/>
			</div>
		</QRWrapper>
	);
};

export default QRCodeView;
