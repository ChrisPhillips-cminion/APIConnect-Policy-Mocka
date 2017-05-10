type=json

result=`curl -qk --request GET \
  --url https://apimdev2019.hursley.ibm.com/automated-test/sb/test-mocka-${type}/path-1 \
  --header 'accept: application/json' \
  --header 'x-ibm-client-id: 9cc4dcb2-a479-4890-9082-1fb9fea202aa'`

echo $?
echo "$result"
echo ""
echo $result | grep "{ \"Test JSON\":\"JSON TEST\" }"

no=$(echo $result | grep "{ \"Test JSON\":\"JSON TEST\" }" | wc -l )

if [ $no -eq 1 ] ; then
  exit 0
else
  echo $result
  exit 1
fi
