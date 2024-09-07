const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {

	let ans=[];

	let N= arr.length;
	for(let i=0;i<N;i++){
		let sum =0;
		let vec=[];
		for(let j=i;j<M;j++){
			sum+=arr[j];
			if(sum <= n){
				vec.push(arr[j]);
			}
		}
		ans.push(vec);
	}

	return ans;
	
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
