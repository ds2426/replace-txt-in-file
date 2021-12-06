import React, { useState } from 'react';
import { Wrapper, Field, Button} from '@components';
import './index.scss';

export const Home: React.FC = () => {
	const [files, setFiles] = useState<File>();
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [replacement, setReplacement] = useState<string>('');
	const [downloadLink, setDownloadLink] = useState('');
	const [occurences, setOccurences] = useState<number>(0);
	const [error, setError] = useState<boolean>(false);
	  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		if(event.currentTarget.files) {
			setFiles(event.currentTarget.files[0]);
			console.log(event.currentTarget.files[0])
		}
	  };
	  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		setError(false);
		if(event.currentTarget.value) {
			setSearchTerm(event.currentTarget.value);
		}
	  };
	  const handleReplacement = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist(); 
		if(event.currentTarget.value) {
			setReplacement(event.currentTarget.value);
		}
	  };
	  const handleClick = async () => {
		const reader = new FileReader()
		reader.onload = async (e) => { 
			if(reader.result) {
				const myRegExp = new RegExp(searchTerm,'g');
				const myText = reader.result.toString();
				const count = (myText.match(myRegExp) || []).length
				setOccurences(count);
				setError(false);
				if(count > 0) {
					const data = new Blob([reader.result.toString().replace(myRegExp, replacement,)], { type: 'text/plain' })
					if (downloadLink !== ''){ 
						window.URL.revokeObjectURL(downloadLink)
					}
					setDownloadLink(window.URL.createObjectURL(data))
					setError(false);
				}
				else {
					setError(true);
					setDownloadLink('')
				}
		}
		}
		if(files) {
			reader.readAsText(files)
		}
		
	  }
	return (
		<Wrapper>
			<div className="o-shell">
				<Field type='file' onChange={handleFileChange} name='file-upload' label='Upload file' placeholder='Please Upload a .txt file'></Field>
				<Field type='text' onChange={handleSearch} name='search-term' label='Search Term' placeholder='Enter search term'></Field>
				<Field type='text' onChange={handleReplacement} name='replacement' label='Replacement' placeholder='Enter a replacement term'></Field>
				<Button onClick={handleClick}>Process</Button><br />
				<p>Found: {occurences}<br />
				Replaced: {occurences}</p>
				{ downloadLink && <Button><a download='updated.txt' href={downloadLink}>View updated file</a></Button>}
				{error && <p className='red'>"{searchTerm}" was not found in File</p>}
			</div>
		</Wrapper>
	);
};

export default Home;
